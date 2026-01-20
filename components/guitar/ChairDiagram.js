import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { G, Circle, Line, Path, Text as SvgText } from 'react-native-svg';
import { colors, camelotColors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { getChairDiagramData } from '../../utils/chairSystem';

// Chair diagram colors
const DIAGRAM_COLORS = {
  green: '#22C55E',
  red: '#EF4444',
  purple: '#A855F7',
  blue: '#3B82F6',
  orange: '#F97316',
  black: '#1F2937',
};

/**
 * ChairDiagram component - Compact visualization of the chair shape
 * Shows the chair metaphor with labeled interval relationships
 *
 * @param {Object} props
 * @param {Object} props.scale - {root, type} scale configuration
 * @param {boolean} props.showIntervalLabels - Show interval labels
 * @param {boolean} props.showBothChairs - Show both major and minor chairs
 * @param {string} props.camelotNumber - Camelot number for color theming
 */
const ChairDiagram = ({
  scale = { root: 'G', type: 'major' },
  showIntervalLabels = true,
  showBothChairs = false,
  camelotNumber = null,
}) => {
  const isMajor = scale.type === 'major';
  const chairData = getChairDiagramData(scale.type);

  // Get themed colors
  const getThemedColor = (baseColor) => {
    if (camelotNumber && camelotColors[camelotNumber]) {
      const camelot = camelotColors[camelotNumber];
      if (baseColor === 'green') return camelot.dark;
      if (baseColor === 'blue') return camelot.medium;
      if (baseColor === 'purple') return camelot.medium;
    }
    return DIAGRAM_COLORS[baseColor] || baseColor;
  };

  // SVG dimensions for single chair
  const width = 140;
  const height = 180;
  const dotRadius = 14;
  const smallDotRadius = 12;

  // Chair shape positions (based on PDF diagram)
  // Major chair: Root at top, works down to 6th
  // Minor chair: b3 at top, works down to root
  const getMajorChairPositions = () => ({
    root: { x: 40, y: 30, color: 'green', label: '1' },
    second: { x: 40, y: 90, color: 'red', label: '2' },
    third: { x: 100, y: 90, color: 'purple', label: '3' },
    fifth: { x: 100, y: 150, color: 'blue', label: '5' },
    sixth: { x: 40, y: 150, color: 'orange', label: '6' },
  });

  const getMinorChairPositions = () => ({
    third: { x: 40, y: 30, color: 'purple', label: '♭3' },
    fourth: { x: 40, y: 90, color: 'blue', label: '4' },
    fifth: { x: 100, y: 90, color: 'blue', label: '5' },
    seventh: { x: 100, y: 150, color: 'orange', label: '♭7' },
    root: { x: 40, y: 150, color: 'green', label: '1' },
  });

  const renderChair = (positions, chairType) => {
    const posArray = Object.entries(positions);

    // Draw connecting lines (chair structure)
    const lines = [];
    const dots = [];

    // Chair back (vertical line on left)
    lines.push(
      <Line
        key="back"
        x1={positions.root?.x || positions.third?.x}
        y1={positions.root?.y || positions.third?.y}
        x2={positions.sixth?.x || positions.root?.x}
        y2={positions.sixth?.y || positions.root?.y}
        stroke={colors.grey400}
        strokeWidth={3}
      />
    );

    // Seat (horizontal line)
    const seatLeft = chairType === 'major' ? positions.second : positions.fourth;
    const seatRight = chairType === 'major' ? positions.third : positions.fifth;
    if (seatLeft && seatRight) {
      lines.push(
        <Line
          key="seat"
          x1={seatLeft.x}
          y1={seatLeft.y}
          x2={seatRight.x}
          y2={seatRight.y}
          stroke={colors.grey400}
          strokeWidth={3}
        />
      );
    }

    // Front leg (diagonal or vertical)
    const frontTop = chairType === 'major' ? positions.third : positions.fifth;
    const frontBottom = chairType === 'major' ? positions.fifth : positions.seventh;
    if (frontTop && frontBottom) {
      lines.push(
        <Line
          key="frontLeg"
          x1={frontTop.x}
          y1={frontTop.y}
          x2={frontBottom.x}
          y2={frontBottom.y}
          stroke={colors.grey400}
          strokeWidth={3}
        />
      );
    }

    // Triad triangle (connecting 1-3-5)
    if (chairType === 'major') {
      lines.push(
        <Path
          key="triad"
          d={`M ${positions.root.x} ${positions.root.y} L ${positions.third.x} ${positions.third.y} L ${positions.fifth.x} ${positions.fifth.y} Z`}
          stroke={getThemedColor('green')}
          strokeWidth={2}
          fill="none"
          strokeDasharray="4,4"
          opacity={0.6}
        />
      );
    } else {
      lines.push(
        <Path
          key="triad"
          d={`M ${positions.third.x} ${positions.third.y} L ${positions.fifth.x} ${positions.fifth.y} L ${positions.root.x} ${positions.root.y} Z`}
          stroke={getThemedColor('green')}
          strokeWidth={2}
          fill="none"
          strokeDasharray="4,4"
          opacity={0.6}
        />
      );
    }

    // Render dots
    posArray.forEach(([key, pos]) => {
      const isRoot = key === 'root';
      const radius = isRoot ? dotRadius : smallDotRadius;

      dots.push(
        <G key={key}>
          <Circle
            cx={pos.x}
            cy={pos.y}
            r={radius}
            fill={getThemedColor(pos.color)}
          />
          <Circle
            cx={pos.x}
            cy={pos.y}
            r={radius - 2}
            fill="none"
            stroke={isRoot ? '#FFFFFF' : 'none'}
            strokeWidth={2}
            opacity={0.4}
          />
          <SvgText
            x={pos.x}
            y={pos.y + 5}
            fontSize={12}
            fontWeight="700"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            {pos.label}
          </SvgText>
        </G>
      );
    });

    return [...lines, ...dots];
  };

  // Single chair view
  const renderSingleChair = () => {
    const positions = isMajor ? getMajorChairPositions() : getMinorChairPositions();
    const chairType = isMajor ? 'major' : 'minor';
    const title = isMajor ? 'Major Chair' : 'Minor Chair';

    return (
      <View style={styles.singleChairContainer}>
        <Text style={styles.chairTitle}>{title}</Text>
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {renderChair(positions, chairType)}
        </Svg>
        {showIntervalLabels && (
          <View style={styles.triadLabel}>
            <Text style={styles.triadText}>
              {isMajor ? 'Triad: 1 - 3 - 5' : 'Triad: 1 - ♭3 - 5'}
            </Text>
          </View>
        )}
      </View>
    );
  };

  // Both chairs view
  const renderBothChairs = () => {
    const majorPositions = getMajorChairPositions();
    const minorPositions = getMinorChairPositions();

    return (
      <View style={styles.bothChairsContainer}>
        <View style={styles.chairColumn}>
          <Text style={styles.chairTitle}>Major Chair</Text>
          <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {renderChair(majorPositions, 'major')}
          </Svg>
          {showIntervalLabels && (
            <View style={styles.triadLabel}>
              <Text style={styles.triadText}>Triad: 1 - 3 - 5</Text>
            </View>
          )}
        </View>

        <View style={styles.chairColumn}>
          <Text style={styles.chairTitle}>Minor Chair</Text>
          <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {renderChair(minorPositions, 'minor')}
          </Svg>
          {showIntervalLabels && (
            <View style={styles.triadLabel}>
              <Text style={styles.triadText}>Triad: 1 - ♭3 - 5</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showBothChairs ? renderBothChairs() : renderSingleChair()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  singleChairContainer: {
    alignItems: 'center',
  },
  bothChairsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  chairColumn: {
    alignItems: 'center',
  },
  chairTitle: {
    ...typography.bodyBold,
    color: colors.grey800,
    marginBottom: 12,
    textAlign: 'center',
  },
  triadLabel: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: colors.grey100,
    borderRadius: 8,
  },
  triadText: {
    ...typography.caption,
    color: colors.grey600,
    fontWeight: '600',
  },
});

export default ChairDiagram;

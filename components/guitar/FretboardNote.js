import React, { useState } from 'react';
import { Platform } from 'react-native';
import { G, Circle, Text as SvgText } from 'react-native-svg';
import { fontFamilies } from '../../styles/typography';

/**
 * FretboardNote - Individual note marker on guitar fretboard
 * Displays a note with hover/press state animation (3% size increase)
 * Supports both hover (web) and press (mobile) interactions
 *
 * @param {Object} props
 * @param {number} props.cx - Center X coordinate
 * @param {number} props.cy - Center Y coordinate
 * @param {number} props.radius - Base radius of the note circle
 * @param {string} props.fill - Fill color
 * @param {string} props.stroke - Stroke color (optional)
 * @param {number} props.strokeWidth - Stroke width (default 2)
 * @param {string} props.label - Text label to display
 * @param {string} props.textColor - Text color
 * @param {Function} props.onPress - Callback when note is pressed
 */
const FretboardNote = ({
  cx,
  cy,
  radius = 14,
  fill,
  stroke = null,
  strokeWidth = 2,
  label,
  textColor,
  onPress,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate scaled radius (3% increase when hovered/pressed)
  const scaledRadius = isHovered ? radius * 1.03 : radius;

  // Calculate font size based on label length
  const fontSize = label.length > 2 ? 10 : 12;

  const handleInteractionStart = () => {
    setIsHovered(true);
  };

  const handleInteractionEnd = () => {
    setIsHovered(false);
  };

  // Props for the G element - includes both hover and press events
  const interactionProps = {
    onPress,
    onPressIn: handleInteractionStart,
    onPressOut: handleInteractionEnd,
    // Web-specific hover events
    ...(Platform.OS === 'web' && {
      onMouseEnter: handleInteractionStart,
      onMouseLeave: handleInteractionEnd,
    }),
  };

  return (
    <G {...interactionProps}>
      <Circle
        cx={cx}
        cy={cy}
        r={scaledRadius}
        fill={fill}
        stroke={stroke}
        strokeWidth={stroke ? strokeWidth : 0}
      />
      <SvgText
        x={cx}
        y={cy + 5}
        fontSize={fontSize}
        fontWeight="600"
        fontFamily={fontFamilies.body}
        fill={textColor}
        textAnchor="middle"
        pointerEvents="none"
      >
        {label}
      </SvgText>
    </G>
  );
};

export default FretboardNote;

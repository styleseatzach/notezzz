import React, { useState } from 'react';
import { G, Circle, Text as SvgText } from 'react-native-svg';
import { fontFamilies } from '../../styles/typography';

/**
 * FretboardNote - Individual note marker on guitar fretboard
 * Displays a note with hover/press state animation (3% size increase)
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
  const [isPressed, setIsPressed] = useState(false);

  // Calculate scaled radius (3% increase when pressed)
  const scaledRadius = isPressed ? radius * 1.03 : radius;

  // Calculate font size based on label length
  const fontSize = label.length > 2 ? 10 : 12;

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <G
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
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

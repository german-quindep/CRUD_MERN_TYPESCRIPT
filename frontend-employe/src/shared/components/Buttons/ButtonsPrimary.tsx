/* import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context"; */

import { Button, ButtonPositionType } from "primereact";
interface ButtonsModels {
  label: string;
  icons?: string;
  type: "submit" | "reset" | "button" | undefined;
  iconsPosition?: ButtonPositionType;
  styles?: React.CSSProperties;
  handleClick?(): void;
}
export const ButtonsPrimary = ({
  handleClick,
  label,
  icons,
  iconsPosition,
  type,
  styles,
}: ButtonsModels) => {
  return (
    <Button
      type={type}
      label={label}
      icon={icons}
      iconPos={iconsPosition}
      style={styles}
    />
  );
};

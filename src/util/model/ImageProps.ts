import { ImageSourcePropType } from "react-native";
import { ButtonProps } from "../../components/Button";

export type ImageProps = {
    id: number;
    image: ImageSourcePropType;
    description: string;
    button: ButtonProps
}
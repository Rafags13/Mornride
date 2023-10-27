import { ImageSourcePropType } from "react-native";
import { ButtonProps, ButtonType } from "../../components/Button";

export type ImageProps = {
    id: number;
    image: ImageSourcePropType;
    description: string;
    button: {
        label: string,
        collection: string,
        typeOfButton?: ButtonType,
    }
}
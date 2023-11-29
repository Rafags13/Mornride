import { ReactNode } from "react";
import { ImageBackground, ImageBackgroundProps, StyleProp, View, ViewStyle } from "react-native";
import style from "./style";

interface BannerViewProps extends Omit<ImageBackgroundProps, "style" | "source"> {
  styles?: StyleProp<ViewStyle>,
  source: string
}

export default function BannerView({ source, children, styles }: BannerViewProps) {
  return (
    <ImageBackground
      source={{ uri: source }}
      style={[style.imageCardContainer, styles]}
      imageStyle={{ borderRadius: 20, }}
    >
      <View style={style.imageContentContainer}>
        {children}
      </View>

    </ImageBackground>
  )
}
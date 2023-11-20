import { View } from "react-native"
import { BikeImagesProfileDto } from "../../util/model/dto/BikeImagesProfileDto"
import { Bike } from "../Bike"
import { useCallback, useState } from "react"
import styles from "./style"
import { PositionOfBike } from "../../util/model/enum/PositionOfBike"

type BikePanelProps = {
  images: BikeImagesProfileDto[]
}

export default function DisplayBikePanel({ images }: BikePanelProps) {
  const [currentDisplayPhoto, setCurrentDisplayPhoto] = useState<BikeImagesProfileDto>({
    imageUrl: images.find(image => image.position === PositionOfBike.FullBike)?.imageUrl ?? "",
    position: PositionOfBike.FullBike
  });

  const onSelectedImage = useCallback(({ imageUrl, position }: BikeImagesProfileDto) => {
    setCurrentDisplayPhoto({ imageUrl, position })
  }, []);
  return (
    <>
      <Bike.Display>
        <Bike.Image source={currentDisplayPhoto.imageUrl} height={300} />
      </Bike.Display>

      <View style={styles.imageSelectorContainer}>
        {images?.map(({ imageUrl, position }) => {
          return (
            <Bike.Touchable
              key={position}
              isSelected={position === currentDisplayPhoto.position}
              hasBorder
              onPress={() => { onSelectedImage({ imageUrl, position }) }}
            >
              <Bike.Display>
                <Bike.Image source={imageUrl} height={70} />
              </Bike.Display>
            </Bike.Touchable>
          )
        }
        )}

      </View>
    </>
  )
}
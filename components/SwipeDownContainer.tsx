import { ReactNode, useState } from "react";
import { GestureResponderEvent, Pressable } from "react-native";

interface SwipeContainerProps {
  onSwipeDown: ()=>void
  children: ReactNode[]
}

const SwipeDownView: React.FC<SwipeContainerProps> = (props: SwipeContainerProps) => {
  const [swipeStart, setSwipeStart] = useState(0);


  const handleEvent = (e: GestureResponderEvent) => {
    if(e.nativeEvent.locationY - swipeStart < 100) return;

    props.onSwipeDown();
  }

  return (
    <Pressable onPressIn={(e)=>setSwipeStart(e.nativeEvent.locationY)} onPressOut={handleEvent}>
      {props.children}  
    </Pressable>
  )
}

export default SwipeDownView;

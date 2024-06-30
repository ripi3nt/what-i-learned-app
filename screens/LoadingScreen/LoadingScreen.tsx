import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../colors";

const LoadingScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <ActivityIndicator size={48} color={colors.accent}></ActivityIndicator>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;

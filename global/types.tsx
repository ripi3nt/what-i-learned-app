import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  EditPost: { title: string; body: string; username: string, id: number };
  EmailVerification: { username: string };
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Profile: {username: string} | undefined;
  CreatePost: undefined;
};

export type EditPostProps = NativeStackScreenProps<
  RootStackParamList,
  "EditPost"
>;

export type EmailVerificationProps = NativeStackScreenProps<
  RootStackParamList,
  "EmailVerification"
>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type SignupProps = NativeStackScreenProps<RootStackParamList, "Signup">;
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;
export type CreatePostProps = NativeStackScreenProps<
  RootStackParamList,
  "CreatePost"
>;

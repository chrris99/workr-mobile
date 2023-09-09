import { TextInputProps } from "react-native";
import { InputProps } from "./Input";
import { FieldValues } from "react-hook-form";

interface BottomSheetInputProps<T extends FieldValues> extends InputProps<T> {}
import { Animated, Modal, ModalProps, StyleSheet, View } from "react-native";

interface BottomModalProps extends ModalProps {}

const BottomModal = (props: BottomModalProps) => {
  return (
    <Modal animationType="fade" transparent>
      <View style={styles.overlay}>
        <Animated.View style={styles.container}>{props.children}</Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12
  },
});

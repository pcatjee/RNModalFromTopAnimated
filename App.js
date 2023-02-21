import React, { useState, useEffect } from "react";
import { Button, Modal, Text, View, Animated } from "react-native";

const ModalExample = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAnim] = useState(new Animated.Value(-200));

  const showModal = () => {
    setIsModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Hide the modal after 2 seconds
    setTimeout(() => {
      hideModal();
    }, 2000);
  };

  const hideModal = () => {
    Animated.timing(modalAnim, {
      toValue: -200,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Show Modal" onPress={showModal} />

      <Modal visible={isModalVisible} transparent={true}>
        <Animated.View style={{ transform: [{ translateY: modalAnim }] }}>
          <View
            style={{
              backgroundColor: "red",
              margin: 50,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rewardy</Text>
            <Text style={{ marginVertical: 10 }}>Invitation code copied.</Text>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};

export default ModalExample;

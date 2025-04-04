import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (userId === "admin" && password === "1234") {
      navigation.navigate("bmi"); // Navigate to BMI screen
    } else {
      alert("Invalid User ID or Password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupText}>New User? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  signupButton: {
    marginTop: 15,
  },
  signupText: {
    color: "#007bff",
    fontSize: 16,
  },
});

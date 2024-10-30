import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import { useDarkMode } from "../Utils/DarkModeProvider";
import { UserContext } from "../Utils/UserContext"; // Importa el UserContext

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { isDarkMode } = useDarkMode(); // Usar modo oscuro

  // Accede al setter de nombre de usuario desde el contexto
  const { setUsername: setGlobalUsername } = useContext(UserContext);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor, complete todos los campos.");
      return;
    }

    setLoading(true);
    global.setTimeout(() => {
      setLoading(false);
      setGlobalUsername(username); // Guarda el nombre de usuario en el contexto
      router.push("/dashboard"); // Redirige a dashboard
    }, 1000);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#fff" }]}>
        <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
          Inicio de sesión - AcoMiles
        </Text>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: isDarkMode ? "#fff" : "#000" }]}>Usuario</Text>
          <TextInput
            style={[styles.input, { borderColor: isDarkMode ? "#fff" : "#333", color: isDarkMode ? "#fff" : "#000" }]}
            placeholder="Email o nombre de usuario"
            placeholderTextColor={isDarkMode ? "#888" : "#ccc"}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: isDarkMode ? "#fff" : "#000" }]}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.passwordInput, { borderColor: isDarkMode ? "#fff" : "#333", color: isDarkMode ? "#fff" : "#000" }]}
              placeholder="Contraseña"
              placeholderTextColor={isDarkMode ? "#888" : "#ccc"}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
              {showPassword ? (
                <EyeOff size={24} color={isDarkMode ? "#fff" : "gray"} />
              ) : (
                <Eye size={24} color={isDarkMode ? "#fff" : "gray"} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#1DB954" style={styles.loader} />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        )}

        <Text style={[styles.subtitle, { color: isDarkMode ? "#fff" : "#000" }]}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    position: "relative",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  icon: {
    padding: 10,
  },
  button: {
    backgroundColor: "#1DB954",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  loader: {
    marginTop: 20,
  },
});

export default Login;

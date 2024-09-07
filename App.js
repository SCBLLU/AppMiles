import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

import logo from './assets/favicon.png';

const { width } = Dimensions.get('window');

export default function App() {
  const [cursoActivo, setCursoActivo] = React.useState(null);
  const scrollViewRef = useRef(null); // Referencia al ScrollView para desplazarse

  const manejarPresiónCurso = (index) => {
    setCursoActivo(index === cursoActivo ? null : index);
  };

  const cursos = [
    { titulo: 'Introducción a JavaScript', descripción: 'Aprende los fundamentos de JavaScript y cómo programar en este lenguaje.' },
    { titulo: 'Fundamentos de React', descripción: 'Aprende a crear aplicaciones web con React y Redux desde cero.' },
    { titulo: 'Desarrollo web con Node.js', descripción: 'Aprende a crear aplicaciones web con Node.js, Express y MongoDB.' },
  ];

  const planes = [
    { titulo: 'Plan Básico', precio: '$5/mes', características: ['1 proyecto', 'Soporte básico', 'Acceso limitado'] },
    { titulo: 'Plan Estándar', precio: '$15/mes', características: ['5 proyectos', 'Soporte premium', 'Acceso completo'] },
    { titulo: 'Plan Pro', precio: '$25/mes', características: ['Proyectos ilimitados', 'Soporte dedicado', 'Acceso completo y más'] },
  ];

  // Desplazar el carrusel al "Plan Estándar" al cargar la aplicación
  useEffect(() => {
    if (scrollViewRef.current) {
      // Desplazamiento calculado para centrar el Plan Estándar
      const offset = (width * 0.50 + 430) / 2; // Ajuste basado en el tamaño del plan y margen
      scrollViewRef.current.scrollTo({ x: offset, animated: true });
    }
  }, []);

  return (
    <View style={styles.contenedor}>
      <ScrollView contentContainerStyle={styles.contenidoScrollView}>

        <Image source={logo} style={styles.logo} />

        <Text style={styles.titulo}>Cursos de Programación</Text>

        {cursos.map((curso, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tarjetaCurso, index === cursoActivo && styles.tarjetaCursoActiva]}
            onPress={() => manejarPresiónCurso(index)}
          >
            <Text style={styles.tituloCurso}>{curso.titulo}</Text>
            {index === cursoActivo && (
              <Text style={styles.descripciónCurso}>{curso.descripción}</Text>
            )}
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.botónInformación} onPress={() => alert('Próximamente mas cursos y mas utilidades en nuestra aplicación')}>
          <Text style={styles.textoBotónInformación}>Más Cursos</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Planes de Suscripción</Text>

        <Text style={styles.descripción}>Selecciona uno de nuestros planes para mejorar la experiencia de usuario</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contenedorPlanes}
          ref={scrollViewRef} // Asignar la referencia
        >
          {planes.map((plan, index) => (
            <View
              key={index}
              style={[
                styles.tarjetaPlan,
                index === 1 && styles.tarjetaPlanDestacada // Destaca el Plan Estándar
              ]}
            >
              <Text style={styles.tituloPlan}>{plan.titulo}</Text>
              <Text style={styles.precioPlan}>{plan.precio}</Text>
              {plan.características.map((característica, idx) => (
                <Text key={idx} style={styles.característicaPlan}>{característica}</Text>
              ))}

              <TouchableOpacity style={styles.botónSuscribirse} onPress={() => alert('Redirrecionando')}>
                <Text style={styles.textoBotónInformación}>Suscribirse</Text>
              </TouchableOpacity>

            </View>
          ))}
        </ScrollView>



      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  contenidoScrollView: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 60,
  },
  titulo: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },
  descripción: {
    color: '#666',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  tarjetaCurso: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  tarjetaCursoActiva: {
    backgroundColor: '#e0e0e0',
  },
  tituloCurso: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descripciónCurso: {
    fontSize: 14,
    color: '#888',
  },
  contenedorPlanes: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.1, // Ajuste de alineación horizontal
  },
  tarjetaPlan: {
    width: width * 0.75,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: 'center',
  },
  tarjetaPlanDestacada: {
    borderColor: '#FFD700',
    backgroundColor: '#fff', // Un color de fondo más claro para destacar el Plan Estándar
    transform: [{ scale: 1.05 }],
  },
  tituloPlan: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  precioPlan: {
    fontSize: 18,
    fontWeight: '600',
    color: '#888',
    marginBottom: 10,
  },
  característicaPlan: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
  },
  botónSuscribirse: {
    backgroundColor: '#282c34',
    borderRadius: 25,
    paddingVertical: 18,
    paddingHorizontal: 32,
    marginTop: 20,
  },
  botónInformación: {
    backgroundColor: '#282c34',
    borderRadius: 25,
    paddingVertical: 18,
    paddingHorizontal: 32,
    marginTop: 20,
  },
  textoBotónInformación: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

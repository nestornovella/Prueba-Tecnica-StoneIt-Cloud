import { styled } from '@mui/material/styles';
import { Grid, Paper } from "@mui/material";
import TaskCard from './TaskCard';
import { useTaskStore } from '../../store/taskStore';
import { useEffect } from 'react';
import { useUserStore } from '../../store/userStore';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body1,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//     }),
//   }));
//sx estilos en linea
//xs, md, xl

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#111010',
    ...theme.typography.h3,
    padding: theme.spacing(3),
    borderRadius: 10,
    color: 'white',
    height: '0px',
}))

const items = [
    { title: "Introducción a JavaScript", description: "Aprende los fundamentos del lenguaje de programación JavaScript, incluyendo variables, funciones y estructuras de control." },
    { title: "Desarrollo con React", description: "Descubre cómo construir interfaces de usuario interactivas utilizando la biblioteca de JavaScript React." },
    { title: "Conceptos de Node.js", description: "Una guía para comprender el entorno de ejecución de JavaScript Node.js y sus aplicaciones en backend." },
    { title: "Introducción a Bases de Datos", description: "Explora los conceptos básicos de bases de datos relacionales y no relacionales, incluyendo SQL y NoSQL." },
    { title: "Programación Asíncrona en JavaScript", description: "Entiende cómo funciona la programación asíncrona en JavaScript usando callbacks, promesas y async/await." },
    { title: "Estilos con CSS Flexbox y Grid", description: "Aprende cómo crear diseños web responsivos y fluidos usando CSS Flexbox y Grid." },
    { title: "Fundamentos de HTML5", description: "Conoce los elementos principales de HTML5 para estructurar contenido web de manera semántica." },
    { title: "Automatización de Tareas con Python", description: "Descubre cómo usar Python para automatizar tareas comunes en desarrollo y manejo de datos." },
    { title: "Patrones de Diseño en Programación", description: "Explora patrones de diseño de software como Singleton, Factory, y Observer para mejorar tu código." },
    { title: "Aplicaciones Móviles con Flutter", description: "Aprende a desarrollar aplicaciones móviles multiplataforma usando el framework Flutter de Google." },
    { title: "Pruebas Unitarias con Jest", description: "Descubre cómo escribir y ejecutar pruebas unitarias en aplicaciones JavaScript utilizando Jest." },
    { title: "Introducción a Docker", description: "Aprende los conceptos básicos de contenedores y cómo utilizar Docker para crear entornos aislados." },
    { title: "Ciberseguridad Básica", description: "Conoce los conceptos de ciberseguridad para proteger aplicaciones y datos en internet." },
    { title: "Machine Learning con Python", description: "Explora los conceptos iniciales de Machine Learning usando bibliotecas populares como Scikit-learn." },
    { title: "Scrum y Metodologías Ágiles", description: "Una guía para entender y aplicar la metodología Scrum en proyectos de desarrollo." },
    { title: "Control de Versiones con Git", description: "Aprende a usar Git para el control de versiones en proyectos colaborativos y cómo utilizar GitHub." },
    { title: "Interfaz de Usuario con Figma", description: "Descubre cómo diseñar interfaces de usuario intuitivas y atractivas utilizando la herramienta Figma." },
    { title: "Bases de Datos NoSQL", description: "Explora las bases de datos NoSQL como MongoDB y cuándo usarlas en lugar de bases de datos SQL." },
    { title: "Inteligencia Artificial Básica", description: "Introducción a conceptos de inteligencia artificial y algoritmos de IA como redes neuronales." },
    { title: "Fundamentos de TypeScript", description: "Conoce las ventajas de TypeScript sobre JavaScript y cómo agregar tipos estáticos a tu código." }
];



function TasksRender() {
    const { token } = useUserStore()
    const { gettasks, tasks } = useTaskStore()

    useEffect(() => {
        gettasks(token)
    }, [token])


    return (
        <Grid container margin={20} spacing={{ xs: 3, md: 2 }}>
            {
                tasks?.map(e => {
                    return (
                        <Grid key={e.id} item xs={12} md={4} xl={4} >
                            <TaskCard deadline={e.deadline} id={e.id} title={e.title} description={e.description} status={e.status} />
                        </Grid>
                    )
                })
            }

        </Grid>
    );
}

export default TasksRender;
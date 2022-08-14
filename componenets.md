# COMPONENT:

- App

  - Recibe: Nada
  - Muestra: Titulo, boton, componente formulario y componente listado
  - Estado: Visible o no el formulario
  - Accion : Nada

- Boton

  - Recibe por props: una función y texto
  - Muestra: el texto recibido
  - Estado: Ninguno
  - Accion: Llamar a la accion recibida cuando le clican.

- Listado de robots:

  - Recibe de la store: Listado de robots
  - Muestra: Tantos tareas como reciba.
  - Estado: Ninguno
  - Accion: Ninguno

- robot:
  - Recibe por props: Información de la robot
  - Muestra: la informacion recibida y dos botones
  - Estado: Ninguno
  - Accion:

# Datos

- Robots : mongoDB

- Modificaciones:
  - Listar : getAll todos los robots de mongoDB
  - robot : getID un robot de mongoDB
  - delete : getID un robot de mongoDB
  - add : add un robot de mongoDB
  - update : updateID un robot de mongoDB

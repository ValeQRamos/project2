/* 

! Alerta
* Importante
? Pregunta
TODO Por Hacer(tarea)

------------------------------------------------------------------
? (F) = folder (A) = archivo
! Primero Vale agrega el login ya echo con middleware 
* Notas Vale
! instalaciones necesarias en la terminal:
1. npm install -y
2. npm install bcryptjs
3. npm install express-session
4. npm install connect-mongo
5. npm install cloudinary multer multer-storage-cloudinary

-------------------------------------------------------------------
TODO 1 : MODELOS

// *Vale  -> 1. crear el archivo y modelo de los ejercicios...........//? ((F)models/(A)Routine.model.js)
// *         2. crear el archivo y rutas CRUD de las rutinas..........//? ((F)routes/(A)routine.routes.js)
// *         3. crear la vista de todas las rutinas...................//? ((F)vies/(F)routines/(A)routines.hbs)
// *         4. crear la vista de formulario para crear rutinas.......//? ((F)views/(F)routines/(A)new-routine.hbs)
// *         5. crear la vista de formulario para editar rutinas......//? ((F)views/(F)routines/(A)edit-routine.hbs)
// *            6. dar un poco de formato al index, layout  y routines/routines
--------------------------------------------------------------------
TODO 2 : Pefil y Pruebas
// ! Los botones que manden a los formularios  pueden estar dentro de un nav o solos pero solo adentro del perfil del usuario
// *Azdhy -> 1. hacer pruebas del login para ver si salen errores.....//? localhost
// *Vale  -> 1. hacer botones para crear y editar desde perfil........//? ((F)views/(F)users/(A)user-profile.hbs)
// *Vale  -> 2. cambiar a español auth routes.js


/* 
*Links de gifs de ejercicios:
https://giphy.com/gifs/8fit-fitness-squat-322W9dk1XC1esd8uyd
https://giphy.com/gifs/8fit-23hPPMRgPxbNBlPQe3
*/

// * Temas por tocar con Azdhy
/* 
* OPCION 1
implementar esto!
<div class="tile is-ancestor">
  <div class="tile is-horizontal">
    <div class="tile is-parent">
      <div class="tile is-child">
        <!--Content here-->
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box">
        <!--Content here-->
      </div>
    </div>
  </div>
</div>

*OPCION 3
http://jsfiddle.net/vtrm92u1/10/
*/


// ! Pendintes de Vale
/* 
1. darle mas formato a los ejemplos de rutinas (routines)

2. snack edit ( no te lo da en la lista ) / editar recetas (boton de editar muy alto )/ fotos mas grandes (excerciste list )

3. darle formato al login y signup

4. pensar en como hacer dinamica el nav
// 5. hacer el nav statico
*/

/*
!PREGUNTAR SI TODO LO QUE SE VA A VER SEA FUNCIONAL 


! modelo de signup --> agregar foto al perfil.... (V)
!revisar que se queda en nav  (probar la nav solo en layout) (A)
!revisar que quede en footer, CONVERTIR LOS BONOTES DE VERDAD (V)
!revisar formato de snacks ---> lista de ingredientes y instrucciones (A)
!Completar formato de exercise (A)
!dar formato al login (V)
!dar formato al signup(V)
!Cambiar colores de botones rouyines/routines (V)
!Revisar style create-routine y edit-routine(V)
!agregar NOTA en crear snack que coda ingrdiente sea separado por una coma y para instrucciones sepaparar por numeros (A)


TODO NO TAN PRIORITARIO POR AHORA
!.- CAMBIAR LOS NOMBRES DE LOS ARCHIVOS (EJERCICIOS Y RUTINAS)
!checar si se puede añadir una ventana emergente para cuando algo no esta correcto o falta algo 
!revisar como hacer las fotos del mismo tamaño cuando son diferentes

*/
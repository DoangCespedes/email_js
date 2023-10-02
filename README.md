

Hoy aprenderemos a enviar un correo de nuestra típica sección de contacto de nuestra página web elaborada en su Front con React.js   usando su nueva característica que son los hooks.  Con la ayuda de emailJS enviaremos nuestra consulta a un correo. Con emailJs no es necesario un lenguaje de backend para enviar correos. 



TUTORIAL


1.) Abrimos el terminal presionando la tecla window + R
2.)Nos vamos al escritorio escribiendo cd desktop
3.)Escribimos la siguiente instrucción npx create-react-app emailjs
4.)navegamos hasta la carpeta creada cd emailjs
5.)Procedemos a instalar el siguiente paquete npm i emailjs-com
NOTA : Ademas de eso tambien instalaremos uno de los modulos que usaremos en el componente // //si no tenemos esa dependencia installarla npm i @emailjs/browser'.
6.)Regístrese en EmailJS. 
7.)Después de registrarse, haga clic en Email Services, elige Gmail para comenzar. Seleccionar la cuenta que llegaran los correos y crear el servicio. Después puedes modificar el proveedor cuando quieras.
8.) Nos dirigimos a Email templates y modificamos nuestro cuerpo de mensaje y probamos en test si funciona.
9.)Sustituimos los campos 

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

10.)Tomemos nuestra SERVICE_ID de email services y sustituimos en nuestro codigo
11.)Tomemos nuestra TEMPLATE_ID de email template, setting y sustituimos en nuestro codigo
12.)Tomemos nuestra PUBLIC_KEY de accound y sustituimos en nuestro codigo


URL = https://www.emailjs.com/
PASSWORD = dmoisesc-l0893


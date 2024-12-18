# CLIGPT (cligpt) 🖥️

CLIGPT (cligpt) es una herramienta de línea de comandos que utiliza el modelo de lenguaje GPT (Generative Pre-trained Transformer) para devolverte comandos de Linux que realicen la acción especificada en lenguaje natural.

## Instalación 🛠️

Para instalar `cligpt`, asegúrate de tener [Node 18+](https://nodejs.org/) instalado en tu sistema y luego ejecuta el siguiente comando:

```bash
npm install -g @manzdev/cligpt
```

Esto instalará `cligpt` globalmente en tu sistema, lo que te permitirá acceder al comando desde cualquier lugar en tu terminal.

## Configuración ⚙️

Puedes utilizar `cligpt` de dos formas:

- Con OpenAI:

Necesitas una [key de OpenAI](https://platform.openai.com/api-keys). Es un servicio de pago, pero el coste es muy reducido, práctico y cómodo.

- Con Ollama:

Necesitas una tarjeta gráfica potente y tener instalado [Ollama](https://ollama.com/).

Necesitarás crear un fichero `~/.env`, es decir, en tu carpeta raíz de usuario. Dicho fichero, debe tener la key de OpenAI en este formato:

```bash
OPENAI_KEY=sk__________________
```

El comando `cligpt` detectará automáticamente esa key y la utilizará cada vez que se llame. Por seguridad, se aconseja establecer un [límite](https://platform.openai.com/account/limits) para no superarlo por error, si se diera el caso.

## Uso 🚀

Para usar `cligpt`, simplemente ejecuta el comando `cligpt` seguido de lo que quieres que haga el comando. Puedes añadir esa información entre comillas para mayor claridad. Por ejemplo:

```bash
cligpt "borrar todos los archivos en un directorio"
```

Esto te devolverá un comando de Linux que realizará la acción especificada. El comando devuelto **no se ejecutará**, lo mostrará por pantalla, ya que el objetivo es que el usuario aprenda nuevos comandos y forma de trabajar con ellos.

> Si no instalas `cligpt` como global con `-g`, recuerda escribir `npx` antes del comando.

## Ejemplos 📝

A continuación, algunos ejemplos de acciones que puedes especificar y los comandos de Linux que `cligpt` podría devolver:

- **Comprimir un directorio y su contenido en ZIP:**
  ```bash
  cligpt "comprimir el directorio 'proyecto' en un archivo zip"
   » zip -r proyecto.zip proyecto
  ```

- **Buscar y reemplazar texto en varios archivos**:
  ```bash
  cligpt "buscar la cadena 'error' y reemplazarla por 'excepción' en todos los archivos .txt en el directorio actual"
   » sed -i 's/error/excepción/g' *.txt
  ```

- **Edición de videos:**
  ```bash
  cligpt "recortar un fragmento de video desde el segundo 30 hasta el 45 y guardarlo en mp4"
   » ffmpeg -i input.mp4 -ss 00:00:30 -to 00:00:45 -c copy output.mp4
  ```

## Contribuir 🤝

¡Si deseas contribuir a `cligpt`, estamos abiertos a tus ideas y sugerencias! Si encuentras un error o tienes una mejora, por favor, abre un issue en el repositorio de GitHub o envía una PR.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

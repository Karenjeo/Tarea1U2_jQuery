
#Importar libreria
import os
from flask import Flask, render_template, request
#Instancia de la aplicación
app = Flask(__name__)
#Contraseña secreta de la aplicación
app.secret_key = "jeomaira"


#Rutas de las carpetas 
app._static_folder = os.path.abspath("templates/static")
#Ruta de la página principal
@app.route("/", methods=["GET"])

def index():
    """
    Renderizar la página principal
    Retorno
    ------
    Página principal renderizada
    """

    return render_template("layouts/index.html")

#Función main de la aplicacion
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug = True)
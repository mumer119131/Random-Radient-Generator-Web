from flask import Flask, jsonify, request
import random_gradient_generator
import ast
app = Flask(__name__)


@app.route("/", methods=["POST"])
def generate_random_gradient():
    if request.method == "POST":
        no_of_color_dict = ast.literal_eval(request.get_data().decode())
        colors = random_gradient_generator.generate_random_gradient(
            no_of_color_dict["no_of_colors"])
        response = jsonify({"colors": colors})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


if __name__ == "__main__":
    app.run(debug=True)

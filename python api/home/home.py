from flask import Blueprint, render_template

home_blueprint = Blueprint('home', __name__)

@home_blueprint.route("/home")
def index():
    return "Welcome Home!"
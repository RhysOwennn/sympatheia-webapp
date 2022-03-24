from tkinter import EW
import json
from flask import request
from flask import Blueprint, render_template, jsonify
from flask_cors import cross_origin

# from analysis import processText

from .analysis import processText

writeup_blueprint = Blueprint('writeup', __name__)

@cross_origin()
@writeup_blueprint.route("/writeup", methods=['POST'])
def analyzeText():
    
    # request_data = request.get_json()
    if request.method == "POST":
        data = request.get_json()
        print(data["value"])
        response, polarity, subjectivity, sub, pol = processText(data["value"])
        print("sub", sub)
        analyzedData = {
            'Message': response,
            'polarity': polarity,
            'subjectivity': subjectivity,
            'text': data["value"],
            'ID': "0",
            'sub': sub,
            'pol': pol,
            }
        response = jsonify(analyzedData)
        return response
    else:
        analyzedData = {
            'Message': "response",
            'polarity': "polarity",
            'subjectivity': "subjectivity",
            'text': "text",
            'ID': "0",
            'sub': "sub",
            'pol': "pol"
            }
        response = jsonify(analyzedData)
        return response
        
    
    # writingToProcess = json.loads(data)
    # print(writingToProcess["value"])

    
    
    # Enable Access-Control-Allow-Origin
    



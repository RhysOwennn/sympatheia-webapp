from flask import Flask
from writeup.writeup import writeup_blueprint
from home.home import home_blueprint
from flask_cors import CORS, cross_origin


application = Flask(__name__)
cors = CORS(application)
application.config['CORS_HEADERS'] = 'Content-Type'
application.register_blueprint(writeup_blueprint)
application.register_blueprint(home_blueprint)

application.run(threaded=True, use_reloader=True)


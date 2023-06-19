from __init__ import *
from flask_frozen import Freezer
frezer = Freezer(app)
if __name__ == '__main__':
    frezer.freeze()
    app.run(debug=False, host='0.0.0.0')
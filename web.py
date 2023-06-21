from flask import Flask, render_template, request
import smtplib
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
@app.route('/home')
def home2():
    home()
@app.route('/about_us')
def about():
    return render_template('about_us.html')
@app.route('/support')
def contact():
    return render_template('support.html')
@app.route('/plans')
def plans():
    return render_template('plans.html')
@app.route('/support/submit', methods=['POST'])
def submit_request():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    def sendEmail(to, subject, content,):
        message = f"Subject: {subject}\n\n{content}"
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.login('investbtc.org@gmail.com', 'abfuxysnabxucysn')
        server.sendmail('investbtc.org@gmail.com', to, message)
        server.close()
    content = "\n".join([
        f"Dear Support Team, {name} has some queries regarding your investment plans. Please solve them ASAP",
        f"Message: {message}",
        f"You can contact them on this email: {email}",
        "Regards,",
        "Automatic Support Request Generation",
        "* Please Note that this is a copy of automatically generated email for your support request *",
    ])
    to = 'investbtc.org@gmail.com'
    subject = "InvestBTC Support"
    sendEmail(to, subject, content)
    to_copy = email
    sendEmail(to_copy, subject, content)
    return render_template('submitted.html')
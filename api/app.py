from flask import Flask, request
from flask_cors import CORS
from openai import OpenAI

# openfile = open('APIKEY.txt', 'r')
# apikey = openfile.read()
# openfile.close()
apikey = "API KEY HERE"  # Troque por sua chave de API


client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key=apikey,
)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET"]}})

@app.route('/', methods=['GET'])
def index():
    completion = client.chat.completions.create(
    # extra_headers={
    #     "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    #     "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
    # },
    extra_body={},
    model="deepseek/deepseek-r1:free",
    messages=[
        {
        "role": "user",
        "content": request.args.get('input',type = str) + " (gere uma resposta sem nenhuma formatação, apenas o que foi pedido, não escreva mais nada para mim)"
        }
    ]
    )
    return completion.choices[0].message.content, 200

@app.route('/resumo', methods=['GET'])
def get_summary():
    completion = client.chat.completions.create(
    # extra_headers={
    #     "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    #     "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
    # },
    extra_body={},
    model="deepseek/deepseek-r1:free",
    messages=[
        {
        "role": "user",
        "content": "Retorne este texto resumido (apenas o texto, não escreva mais nada para mim):\n\n" + request.args.get('text')
        }
    ]
    )
    return completion.choices[0].message.content, 200

@app.route('/ortografia', methods=['GET'])
def get_notes():
    completion = client.chat.completions.create(
    # extra_headers={
    #     "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    #     "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
    # },
    extra_body={},
    model="deepseek/deepseek-r1:free",
    messages=[
        {
        "role": "user",
        "content": "Retorne este mesmo texto, mas com a ortografia corrigida (apenas o texto, não escreva mais nada para mim):\n\n" + request.args.get('text')
        }
    ]
    )
    return completion.choices[0].message.content, 200

if __name__ == "__main__":
    app.run()
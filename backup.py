
from flask import Flask, request, jsonify
# from flask_jwt_extended import JWTManager
from pymongo import MongoClient
from flask_cors import CORS,cross_origin
from bson import ObjectId
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# import re
from werkzeug.utils import secure_filename
# import os
from gridfs import GridFS
# import base64
# from pyresparser import ResumeParser
# import nltk
# import spacy
import json
application = Flask(__name__)
app=application
#CORS(app, support_credentials=True)


# CORS_ALLOW_ORIGIN="*,*"
# CORS_EXPOSE_HEADERS="*,*"
# CORS_ALLOW_HEADERS="content-type,*"
# cors = CORS(app, origins='*', allow_headers=CORS_ALLOW_HEADERS.split(",") , expose_headers= CORS_EXPOSE_HEADERS.split(","),   supports_credentials = True)
# # cors = CORS(app)
CORS_ALLOW_HEADERS = "content-type,*"
CORS_EXPOSE_HEADERS = "*,*"

# Allow CORS from all origins
cors = CORS(app, origins='*', allow_headers=CORS_ALLOW_HEADERS.split(","), expose_headers=CORS_EXPOSE_HEADERS.split(","), supports_credentials=True)



# app.config['JWT_SECRET_KEY'] = 'your-secret-key'
# jwt = JWTManager(app)

# Connect to MongoDB
client = MongoClient('mongodb+srv://temp2:temp2@cluster0.bckwq.mongodb.net/?retryWrites=true&w=majority')


db = client["padavan_db"]  
users_collection = db['users_collection']
job_title_collection=db['job_titles']
companines_collection=db['companies']
feedback_collection=db['feedback']
# users_collection.create_index([("skills.title", "text"),("mentorIntrests.title", "text"),("mentorshipIntrests","text")])

# text_query = {
#         "$text": {
#             "$search": 'software',
#             # "$caseSensitive": False,
#             # "$diacriticSensitive": False
#         }
#     }
# projection = {
#         "score": {"$meta": "textScore"}
#     }
# print()
# print('i am here')
# print()
    

# pipeline = [
#         {"$match": text_query},
#         #  {"$match": {"_id": {"$ne":  ObjectId(user_id)}, "matched": {"$ne": True}, "mentee": {"$ne": mentee}}},
#         {"$project": projection},
#         {"$sort": {"score": {"$meta": "textScore"}}},
#         {"$limit": 6},
#     ]

# # matching_documents = users_collection.find({
# #     **text_query,
# #     # "mentorshippurpose": "to mentor others",
# #     # "_id": {"$ne": ObjectId(user_id)}
# # }).limit(6)
# results = users_collection.aggregate(pipeline)
# finalresult=[]
# print()
# # print('res',matching_documents)
# # serialized_users = [serialize_object(user) for user in matching_documents]
# # for i in serialized_users:
# #     print(i)
# # print()
# for result in results:
#     finalresult.append(users_collection.find_one({'_id':ObjectId(result.get("_id"))}))
#     print(result)

# print()
# print(finalresult)
# print('final')
# print()

# nltk.download('stopwords')

@app.route("/search",methods=['GET'])
def search():
    user_id=request.args.get('_id')
    search_query=request.args.get('query')
    purpose=request.args.get('purpose')
    

#     # Split the search query into individual terms
    
#     # text_query = {
#     #     "$text": {
#     #         "$search": " ".join(search_terms),
#     #         "$caseSensitive": False,
#     #         "$diacriticSensitive": False
#     #     }
#     # }
#     # matching_documents = users_collection.find({
#     #     **text_query,
#     #     "mentorshippurpose": "to mentor others",
#     #     "_id": {"$ne": ObjectId(user_id)}
#     # }).limit(6)

#     # serialized_users = [serialize_object(user) for user in matching_documents]
#     # for i in serialized_users:
#     #     print(i)

#     # # Print the matching documents
#     # for document in matching_documents:
#     #     print(document)


    search_terms = search_query.split()
    


        
    
    text_query = {
        "$text": {
            "$search": " ".join(search_terms),
            "$caseSensitive": False,
            "$diacriticSensitive": False
        }
    }

   
    projection = {
        "score": {"$meta": "textScore"}
    }
    print()
    print()
   
    print()
    pipeline = [
    
        {"$match": text_query},
         {"$match": {"_id": {"$ne":  ObjectId(user_id)}, "purpose": {"$ne": purpose}}},
        {"$project": projection},
        {"$sort": {"score": {"$meta": "textScore"}}},
        {"$limit": 6},
        
    ]
    results = users_collection.aggregate(pipeline)
    finalresult=[]
    for result in results:
        finalresult.append(users_collection.find_one({'_id':ObjectId(result.get("_id"))}))
        print(result)
    print()
    print()
   
    print()
    encodedresult=[]
    for u in finalresult:
        encodedresult.append(serialize_object((u)))
        
    return jsonify({'matchedmentor':encodedresult})



def match():
    mentee=True
    search_terms=[]
    mentorshipIntrests=[]
    mentorIntrests=[]
    skills=[]

    if mentee:
        search_terms.extend(mentorshipIntrests)
        search_terms.extend(skills)
    else:
        search_terms.extend(mentorIntrests)
        search_terms.extend(skills)

    user_id=request.args.get('_id')
    search_query=request.args.get('query')
    purpose=request.args.get('purpose')
    search_terms = search_query.split()
    text_query = {
        "$text": {
            "$search": " ".join(search_terms),
            "$caseSensitive": False,
            "$diacriticSensitive": False
        }
    }
    projection = {
        "score": {"$meta": "textScore"}
    }
    print()
    print()
    print()
    pipeline = [
        {"$match": text_query},
         {"$match": {"_id": {"$ne":  ObjectId(user_id)}, "matched": {"$ne": True}, "purpose": {"$ne": purpose}}},
        {"$project": projection},
        {"$sort": {"score": {"$meta": "textScore"}}},
        {"$limit": 6},
    ]
    results = users_collection.aggregate(pipeline)
    finalresult=[]
    for result in results:
        finalresult.append(users_collection.find_one({'_id':ObjectId(result.get("_id"))}))
        print(result)
    print()
    print()
    print()
    encodedresult=[]
    for u in finalresult:
        encodedresult.append(serialize_object((u)))
        
    return jsonify({'matchedmentor':encodedresult})

def serialize_object(data):
    if isinstance(data, list):
        return [str(item["_id"]) if isinstance(item["_id"], ObjectId) else item for item in data]
    elif isinstance(data, dict):
        return {key: str(value) if key == "_id" and isinstance(value, ObjectId) else value for key, value in data.items()}
    return data

@app.route('/signin', methods=['GET'])
def signin():
    email = request.args.get('email')
    password = request.args.get('password')
    return jsonify(serialize_object(users_collection.find_one({"email": email,'password':password})))
   
fs = GridFS(db)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'pdf'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route('/feedback', methods=['POST'])
@cross_origin(supports_credentials=True)
def feedback():

    email=request.json['email']
    f=request.json['feedback']
    data={
        'email':email,
        'feedback':f
    }
    print('hello')
    feedback_id = feedback_collection.insert_one(data).inserted_id
    userfeedback=feedback_collection.find_one({'_id': feedback_id})
    return jsonify(serialize_object(userfeedback))

@app.route('/getdata', methods=['GET'])
def getData():

    return jsonify('helloe')
@app.route('/users', methods=['POST'])
@cross_origin(supports_credentials=True)
def create_user():
    data={
        'email':'',
        'password':'',
        'mentee':'',
        'mentor':'',
        'mentorshipIntrests':'',
        'mentorshipIntrests':'',
        'education':'',
        'skills':'',
        'resume':'',
        'firstname':'',
        'lastname':'',
        'linkedinProfile':'',
        'matched':False
    }

    req_json = request.form['requiredDetails']
    req=json.loads(req_json)

    skills_json = request.form['skills']
    skills=json.loads(skills_json)

    education_json = request.form['education']
    edu=json.loads(education_json)

    mentorshipIntrests_json = request.form['mentorshipIntrests']
    mentorshipIntrests=json.loads(mentorshipIntrests_json)

    mentorIntrests_json = request.form['mentorIntrests']
    mentorIntrests=json.loads(mentorIntrests_json)

    data['education']=edu
    data['skills']=skills
    data['mentorshipIntrests']=mentorshipIntrests
    data['mentorIntrests']=mentorIntrests
    if req:
        data['email']=req['gmail']
        data['password']=req['password']
    data['additionalInformation']=request.form['additionalInformation']
    data['mentor']=request.form['mentor']
    data['mentee']=request.form['mentee']
    data['lastname']=request.form['lastname']
    data['firstname']=request.form['firstname']
    data['linkedinProfile']=request.form['linkedinProfile']
    data['matched']=request.form['matched']


    if 'resume' in request.files:
        resume = request.files['resume']
        if resume and allowed_file(resume.filename):
            filename = secure_filename(resume.filename)
            resume_id = fs.put(resume, filename=filename)
            data['resume'] = str(resume_id)

    user_id = users_collection.insert_one(data).inserted_id


    mentee=data['mentee']
    search_terms=''
    mentorshipIntrests=data['mentorshipIntrests']
    mentorIntrests=data['mentorIntrests']
    skills=data['skills']
    flag=True

    if mentee:
        for i in mentorshipIntrests:
            search_terms=(i['title'])+' '+search_terms
        
        for i in skills:
            search_terms=(i['title'])+' '+search_terms
        
        flag=False
    else:
        for i in mentorIntrests:
            search_terms=(i['title'])+' '+search_terms
       
        for i in skills:
            search_terms=(i['title'])+' '+search_terms
#         # search_terms.extend(mentorIntrests)
#         # search_terms.extend(skills)
        flag=True
    print()
    print()
    search_terms = search_terms.split()
    print('seartch terms ',search_terms)
    text_query = {
        "$text": {
            "$search": " ".join(search_terms),
            "$caseSensitive": False,
            "$diacriticSensitive": False
        }
    }
    projection = {
        "score": {"$meta": "textScore"}
    }
    print()
    print('i am here')
    print()
    

    pipeline = [
        {"$match": text_query},
         {"$match": {"_id": {"$ne":  ObjectId(user_id)}, "matched": {"$ne": True}, "mentee": {"$ne": mentee}}},
        {"$project": projection},
        {"$sort": {"score": {"$meta": "textScore"}}},
        {"$limit": 6},
    ]
    results = users_collection.aggregate(pipeline)
    finalresult=[]
    print()
    print('res',results)
    print()
    for result in results:
        finalresult.append(users_collection.find_one({'_id':ObjectId(result.get("_id"))}))
        print(result)

    print()
    print(finalresult)
    print('final')
    print()

    user=users_collection.find_one({'_id': user_id})
    return jsonify(serialize_object(user))
@app.route('/', methods=['GET'])
def query_root():
    
        return jsonify({'is working': 'yes'})

@app.route('/val', methods=['GET'])
def query_records():
    
        return jsonify({'is working': 'val'})
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug = True)


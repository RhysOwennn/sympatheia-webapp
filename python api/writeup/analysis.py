# this is a sentiment analysis program that parses the tweets fetched from twitter using python

import json
import joblib
# tweepy is an easy to use python library for accessing the twitter API
import tweepy
from textblob import TextBlob
from wordcloud import WordCloud

# pandas is an open source data analysis and manipulation tool
import pandas as pd
import numpy as np
# Regular Expression Syntax - A regular expression (or RE) specifies a set of strings that matches it; the functions in this module let you check if a particular string matches a given regular expression
import re
import matplotlib.pyplot as plt



def processText(text):
    cleanedText, subjectivity, polarity  = cleanAndProcess(text)
    print(cleanedText, subjectivity, polarity)
    measuredSubjectivity = subjectivityAlert(subjectivity)
    measuredOptimism = negativityAlert(polarity)
    polarityScore = polarity
    subjectivityScore = subjectivity
    response = constructResponse(measuredOptimism, measuredSubjectivity)
    print(response)
    return response, measuredSubjectivity, measuredOptimism, polarityScore, subjectivityScore



def constructResponse(measuredOptimism, measuredSubjectivity):
    print(measuredOptimism, measuredSubjectivity)
    if measuredOptimism == "neutral" and measuredSubjectivity == "neutral":
        return "Your sentiment is neutral."
    elif measuredOptimism == "positive" and measuredSubjectivity == "objective":
        return "Your sentiment is overall optimistic emotion and measured truth"
    elif measuredOptimism == "negative" and measuredSubjectivity == "subjective":
        return "Your sentiment is negative in emotion and opinionated in truth"
    elif measuredOptimism == "positive" and measuredSubjectivity == "subjective":
        return "Your sentiment is optimistic in emotion and opinionated"
    elif measuredOptimism == "negative" and measuredSubjectivity == "neutral":
        return "Your sentiment is overall negative in emotion and neutral in truth"
    elif measuredOptimism == "positive" and measuredSubjectivity == "neutral":
        return "Your sentiment is overall optimistic in emotion and neutral in truth"
    elif measuredOptimism == "neutral" and measuredSubjectivity == "subjective":
        return "Your sentiment is overall neutral in emotion and opinionated"
    elif measuredOptimism == "neutral" and measuredSubjectivity == "objective":
        return "Your sentiment is overall neutral in emotion and measured in truth"    
    elif measuredOptimism == "neutral" and measuredSubjectivity == "objective":
        return "Your sentiment is overall neutral in emotion and measured in truth"
    elif measuredOptimism == "negative" and measuredSubjectivity == "objective":
        return "Your sentiment is overall pessimistic in emotion and measured in truth"
    
    

def subjectivityAlert(score):
    if score == 0.0:
        return "neutral"
    elif score < 0.0:
        return "objective"
    elif score > 0.0:
        return "subjective"

def negativityAlert(score):
    if score == 0.0 and score == 0.0:
        return "neutral"
    elif score < 0.0:
        return "negative"
    elif score > 0.0:
        return "positive"
    



def cleanAndProcess(text):
    sterilized = sterilizeText(text)
    subjectivity = getSubjectivity(sterilized)
    polarity = getPolarity(text)
    return sterilized, subjectivity, polarity


def sterilizeText(text):
    text = re.sub(r'@[A-Za-z0-9]+', "", text) # Removes @mentions
    text = re.sub(r"#", '', text) # Removes the '#' symbol
    text = re.sub(r"RT[\s+]", '', text) # Removes the RT
    text = re.sub(r'https?:\/\/\S+', '', text)

    return text

def getSubjectivity(text):
    return TextBlob(text).sentiment.subjectivity

def getPolarity(text):
    return TextBlob(text).sentiment.polarity



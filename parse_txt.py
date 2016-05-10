import json

headers = ['words']
text = {}
for title in headers:
    f = open('assets/'+title+'.txt')
    lines = []
    for line in f:
        lines.append(line)
    text[title] = lines
    f.close()
    
with open('assets/words.json', 'w') as outfile:
    json.dump(text, outfile)
    

---
---
var new_urls = [{% for post in site.posts %}{title:"{{ post.title }}", page:"{{ site.course_url }}{{ post.url }}"}, {% endfor %}{title:"", page:""}];
new_urls.pop();
urls = urls.concat(new_urls);
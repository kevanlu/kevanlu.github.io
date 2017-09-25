---
---
var tipuesearch = {"pages": [
	{% for post in site.posts %}{"title": "{{ post.title }}", "text": "{{ post.content | strip_html | strip_newlines | remove:'"' }}", "tags": "", "loc": "{{ site.course_url }}{{ post.url }}"},
	{% endfor %}{"title": "{{ site.course_name }}", "text": "Course notes for {{ site.course_name }}", "tags": "", "loc": "{{ site.course_url }}"}
]};


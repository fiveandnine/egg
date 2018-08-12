<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit"/>
</head>
<body>
<div>header</div>
<div>title: {{ title }}{{helper.formatJson(title)}}</div>
{% block body %}
<div id="body">

    <div id="body-inner" class="clearfix">
        {% block content %}
        {% endblock content %}
    </div>
</div>
{% endblock body %}
<div>footer</div>
</body>
</html>

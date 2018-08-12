<!-- app/view/news/list.tpl -->
{% extends '../common/layout.tpl' %}
{% block content %}
<ul class="news-view view">
    <p>{{ __('Email') }}</p>
    {% for item in list %}
    <li class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
    </li>
    {% endfor %}
</ul>
{% endblock content %}

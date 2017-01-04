# ThemeBundle

``` yaml
# Twig Configuration
twig:
    ...
    form_themes:
        - 'JpassThemeBundle:theme:_form.html.twig'
    globals:
        theme: 'JpassThemeBundle:theme:layout.html.twig'
        
# Knp Menu Bundle Configuration
knp_menu:
    ...
    twig:
        template: 'JpassThemeBundle:theme:_menu.html.twig'
```

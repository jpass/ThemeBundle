# JpassThemeBundle

## Installation


### 1. Download using composer

``` bash
$ composer require jpass/theme-bundle@dev
```

### 2. Enable the bundle

Enable the bundle in the kernel

``` php
<?php
// app/AppKernel.php

public function registerBundles()
{
    $bundles = array(
        // ...
        new Jpass\ThemeBundle\JpassThemeBundle(),
        // ...
    );
}
```

### 3. Configuration

In app/config/config.yml:

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

## Usage

In your twig files
``` twig
{% extends theme %}

{# ... #}
```

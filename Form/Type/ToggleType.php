<?php

namespace Jpass\ThemeBundle\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ToggleType
{
    public function configureOptions(OptionsResolver $resolver)
    {
    }

    public function getParent()
    {
        return CheckboxType::class;
    }
}

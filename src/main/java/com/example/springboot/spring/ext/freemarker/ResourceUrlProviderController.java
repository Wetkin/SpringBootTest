package com.example.springboot.spring.ext.freemarker;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.resource.ResourceUrlProvider;

import javax.sound.midi.SysexMessage;
import javax.swing.plaf.synth.SynthMenuBarUI;

@ControllerAdvice
public class ResourceUrlProviderController {

    /**
     * resourceUrlProvider:TODO(用一句话描述这个变量表示什么).
     */
    @Autowired
    private ResourceUrlProvider resourceUrlProvider;

    @ModelAttribute("urls")
    public ResourceUrlProvider urls() {
        return this.resourceUrlProvider;

    }
}

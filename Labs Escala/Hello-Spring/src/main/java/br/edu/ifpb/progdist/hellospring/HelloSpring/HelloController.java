package br.edu.ifpb.progdist.hellospring.HelloSpring;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/ola")
    public String helloString() {
        return "Olá Aaron";
    }
}

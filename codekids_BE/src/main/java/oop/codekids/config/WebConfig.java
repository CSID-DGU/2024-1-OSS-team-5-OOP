package oop.codekids.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(true)
                .maxAge(3600)
                .allowedHeaders("Authorization", "Content-Type")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .exposedHeaders("Custom-Header", "Custom-Value");

    }
}

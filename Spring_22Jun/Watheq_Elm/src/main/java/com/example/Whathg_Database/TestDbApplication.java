package com.example.Whathg_Database;




import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.xml.MarshallingHttpMessageConverter;
import org.springframework.oxm.xstream.XStreamMarshaller;





@EnableAutoConfiguration

@SpringBootApplication

public class TestDbApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(TestDbApplication.class, args);
	}
	
	@Bean
	  public HttpMessageConverter<Object> createXmlHttpMessageConverter()
	   {
	    final MarshallingHttpMessageConverter xmlConverter = new MarshallingHttpMessageConverter();
	    final XStreamMarshaller xstreamMarshaller = new XStreamMarshaller();
	    xstreamMarshaller.setAutodetectAnnotations(true);
	    xmlConverter.setMarshaller(xstreamMarshaller);
	    xmlConverter.setUnmarshaller(xstreamMarshaller);
	    return xmlConverter;
	   }
	
	
	

	
	


}

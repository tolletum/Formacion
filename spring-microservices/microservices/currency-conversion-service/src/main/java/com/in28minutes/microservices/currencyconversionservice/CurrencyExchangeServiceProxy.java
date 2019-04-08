package com.in28minutes.microservices.currencyconversionservice;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

//@FeignClient(name="currency-exchange-service", url="localhost:8000")
//@FeignClient(name="currency-exchange-service") // para poder conectar con exchange-service
@FeignClient(name="netflix-zuul-api-gateway-server") // para poder conectar con exchange-service a través de zuul
@RibbonClient(name="currency-exchange-service") // para pedir clientes de exchage-service a ribbon (balanceador)
public interface CurrencyExchangeServiceProxy {

//	@GetMapping("currency-exchange/from/{from}/to/{to}") // Sin zuul
	@GetMapping("currency-exchange-service/currency-exchange/from/{from}/to/{to}")
	public CurrencyConversionBean retrieveExchangeValue(@PathVariable String from, @PathVariable String to);

}

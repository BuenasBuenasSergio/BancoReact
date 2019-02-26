package es.salesianos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.salesianos.model.Account;
import es.salesianos.service.AccountService;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(value = "/api/v1/account")
public class AccountController {

	@Autowired
	AccountService service;

	@GetMapping("/list")
	public ResponseEntity<List<Account>> listAll() {
		return new ResponseEntity<>(service.listAllAccount(), HttpStatus.CREATED);
	}

	@GetMapping("/depositOrWithdraw")
	public ResponseEntity<Account> depositOrWithdraw(@RequestParam String accountNumber, @RequestParam Integer amount) {
		service.depositOrWithdraw(accountNumber, amount);
		return new ResponseEntity<Account>(HttpStatus.CREATED);
	}

	@GetMapping("/total")
	public ResponseEntity<Integer> getTotal() {
		return new ResponseEntity<>(service.getTotalAmount(), HttpStatus.CREATED);
	}
}

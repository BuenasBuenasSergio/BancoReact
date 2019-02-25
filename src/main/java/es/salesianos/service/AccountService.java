package es.salesianos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.salesianos.model.Account;
import es.salesianos.repository.AccountRepository;

@Service
public class AccountService {

	@Autowired
	AccountRepository repository;

	public List<Account> listAllAccount() {
		return repository.getAccounts();
	}

	public void depositOrWithdraw(Account account) {
		repository.depositOrWithdraw(account);
	}

	public Integer getTotalAmount() {
		return repository.getTotalAmount();
	}

}

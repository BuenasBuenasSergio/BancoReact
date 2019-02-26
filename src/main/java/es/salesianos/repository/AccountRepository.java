package es.salesianos.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import es.salesianos.model.Account;

@Component
public class AccountRepository {
	private List<Account> accounts = new ArrayList<Account>();

	public List<Account> getAccounts() {
		return accounts;
	}

	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}

	public void depositOrWithdraw(String accountNumber, Integer amount) {
		Optional<Account> accountToModify = accounts.stream().filter(a -> a.getAccountNumber().equals(accountNumber))
				.findFirst();
		Account accountModified = accountToModify.orElse(null);
		if (accountModified != null){
			accountModified.setBalance(accountModified.getBalance() + amount);
		}
		else {
			addNewAccount(accountNumber, amount);
		}	
	}

	private void addNewAccount(String accountNumber, Integer amount) {
		Account newAccount = new Account();
		newAccount.setAccountNumber(accountNumber);
		newAccount.setBalance(amount);
		accounts.add(newAccount);
	}

	public Integer getTotalAmount() {
		Integer total = 0;
		for (Account a : accounts) {
			total += a.getBalance();
		}
		return total;
	}

}

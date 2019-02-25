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

	public void depositOrWithdraw(Account account) {
		Optional<Account> accountToModify = accounts.stream().filter(a -> a.getAccountNumber().equals(account.getAccountNumber()))
				.findFirst();
		Account accountModified = accountToModify.orElse(null);
		if (accountModified != null){
			accountModified.setBalance(accountModified.getBalance() + account.getBalance());
		}
		else {
			accounts.add(account);
		}	
	}



	public Integer getTotalAmount() {
		Integer total = 0;
		for (Account a : accounts) {
			total += a.getBalance();
		}
		return total;
	}

}

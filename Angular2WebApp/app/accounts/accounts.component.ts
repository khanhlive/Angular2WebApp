import {Component} from '@angular/core'

@Component({
    selector: 'my-acc',
    templateUrl: 'app/accounts/accounts.component.html',
    styleUrls:['app/accounts/accounts.component.css']
})
export class AccountComponent {
    header: string='My Account'
}
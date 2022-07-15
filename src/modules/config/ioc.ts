import { Container, token } from 'brandi';
import { AgifyService } from '../../services/agify.service';

const TOKENS = {
    agifyService: token<AgifyService>('agifyService'),
};

const container = new Container();
container.bind(TOKENS.agifyService).toInstance(AgifyService).inTransientScope();


export {
    container,
    TOKENS
}
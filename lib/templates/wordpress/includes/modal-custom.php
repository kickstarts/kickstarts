<?php
/**
 * The template for displaying modal content on ex-aluno register.
 *
 * @package Colégio Assunção
 */
?>

<div id="register" class="modal hide fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <h3 id="myModalLabel">Cadastro de Ex-aluno</h3>
    </div>
    <div class="modal-body">
        <?php echo do_shortcode('[contact-form-7 id="79" title="Registro de Ex-alunos"]'); ?>
    </div>
    <div class="modal-footer">
        <span class="help-block pull-left"><i class="icon-exclamation-sign"></i> Todos os campos são obrigatórios</span>
        <button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Fechar</button>
    </div>
</div>

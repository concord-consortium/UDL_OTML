importClass(Packages.java.awt.event.ActionListener);
importClass(Packages.java.util.Vector);
importClass(Packages.org.concord.otrunk.udl3.OTQuestionList);
importClass(Packages.org.concord.framework.otrunk.OTObjectList);
importClass(Packages.javax.swing.JOptionPane);

var cardContainer = context.getObject(0);
var button = context.getComponentForObject("Button");
var card = context.getObject(2);
var passwordfield = context.getComponentForObject("PasswordField");
var password = context.getObject("Password");
var numCards;
var currentcard;

var buttonHandler =
{
    actionPerformed: function(evt)
    {
    	if (passwordfield != null){
			var passwordAttempt = passwordfield.getText();
			if (passwordAttempt.equalsIgnoreCase(password.getText())){
				cardContainer.setCurrentCard(card);
				return;
			} else {
				JOptionPane.showMessageDialog(null, "Sorry, that's not the correct password.");
				return;
			}
		}
        cardContainer.setCurrentCard(card);
    }
};
var buttonListener = new ActionListener(buttonHandler);

function init() {
	button.addActionListener(buttonListener);
	
	return true;
}

function save() {
	button.removeActionListener(buttonListener);
	return true;
}
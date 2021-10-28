from django.db import models
from django.utils.translation import gettext as _
import random
import string


def generate_unique_code():
    length = 6

    while True:
        code = "".join(random.choices(string.ascii_uppercase, k=length))


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(
        _("password"),
        max_length=128,
        help_text=_(
            "Use '[algo]$[salt]$[hexdigest]' or use the <a href=\"password/\">change password form</a>."
        ),
    )
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    bike = models.CharField(max_length=50)
    created_date = models.DateTimeField(auto_now_add=True)


class Itinerary(models.Model):
    name = models.CharField(max_length=30)
